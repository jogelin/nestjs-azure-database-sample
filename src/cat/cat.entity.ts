import {
  EntityPartitionKey,
  EntityRowKey,
  EntityString,
  EntityInt32,
} from '@nestjs/azure-database';

@EntityPartitionKey('CatID')
@EntityRowKey('CatName')
export class Cat {
  @EntityString() name: string;
  @EntityInt32() age: number;
}
