//all the provided keys are examples, go to Amazon Cognito and get yours

AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

var poolData = {
    UserPoolId : 'us-east-1_hIHdEWPbO', // your user pool id here
    ClientId : '68mp2v2i5aa72ii7fnjei68oai' // your client id here
};

var identityPoolId = 'us-east-1:b2677b11-8594-41a2-a17f-3187fddef326'; //go to AWS Cognito Federated Identites

var userAttributes = ['email', 'phone_number']; //the standard attributes you require in AWS Cognito

var MFARequired = true; //do you require your clients to use MFA?