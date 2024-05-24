#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { atallaAiBedrockIntfrastructureStack } from '../lib/atallaAiBedrock-intfrastructure-stack';

const app = new cdk.App();
new atallaAiBedrockIntfrastructureStack(app, 'atallaAiBedrockIntfrastructureStack', {});
