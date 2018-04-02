export default `
{
  "Description": "Create an EC2 instance running the Amazon Linux 32 bit AMI.",
  "Parameters": {
    "KeyPair": {
      "Description": "The EC2 Key Pair to allow SSH access to the instance",
      "Type": "String"
    }
  },
  "Resources": {
    "Ec2Instance": {
      "Type": "AWS::EC2::Instance",
      "Properties": {
        "KeyName": {
          "Ref": "KeyPair"
        },
        "ImageId": "ami-3b355a52"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The InstanceId of the newly created EC2 instance",
      "Value": {
        "Ref": "Ec2Instance"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
`.trim();
