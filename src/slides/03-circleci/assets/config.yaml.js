export default `
version: 2
jobs:
  plan:
    docker:
      - image: circleci/buildpack-deps:trusty
    steps:
      - checkout
      - run:
          name: Install terraform dependency
          command: |
            wget https://releases.hashicorp.com/terraform/0.11.4/terraform_0.11.4_linux_amd64.zip -O terraform.zip
            unzip terraform.zip -d ~/.bin
      - run:
          name: Update path with Terraform bin
          command: echo 'export PATH=~/.bin:$PATH' >> $BASH_ENV
      - run:
          name: Terraform plan
          command: |
            cd tf
            terraform init
            terraform plan --out terraform.plan
      - save_cache:
          key: tf-{{ .Branch }}-{{ .BuildNum }}
          paths:
            - tf
  deploy:
    docker:
      - image: circleci/buildpack-deps:trusty
    steps:
      - checkout
      - restore_cache:
          keys:
            - tf-{{ .Branch }}-{{ .BuildNum }}
            - tf
      - run:
          name: Install terraform dependency
          command: |
            wget https://releases.hashicorp.com/terraform/0.11.4/terraform_0.11.4_linux_amd64.zip -O terraform.zip
            unzip terraform.zip -d ~/.bin
      - run:
          name: Update path with Terraform bin
          command: echo 'export PATH=~/.bin:$PATH' >> $BASH_ENV
      - run:
          name: Apply terraform plan
          command: |
            cd tf
            terraform init
            terraform apply terraform.plan

workflows:
  version: 2
  plan-and-deploy:
    jobs:
      - plan
      - approve-plan:
          type: approval
          requires:
            - plan
          filters:
            branches:
              only: master
      - deploy:
          requires:
            - approve-plan
          filters:
            branches:
              only: master

`.trim();
