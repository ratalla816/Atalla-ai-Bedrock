import * as cdk from 'aws-cdk-lib';
import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class atallaAiBedrockIntfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new DynamoDB instance that is set to use on demand billing and to be removed when the stack is destroyed
    new Table(this, 'AtallaAiBedrockDB', {
      partitionKey: { name: 'pk', type: AttributeType.STRING },
      sortKey: { name: 'sk', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      tableName: 'AtallaAiBedrockDB',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
