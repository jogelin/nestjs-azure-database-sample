import { Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';

import {
  AzureTableStorageResponse,
  AzureTableStorageResultList,
  InjectRepository,
  Repository,
} from '@nestjs/azure-database';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>,
  ) {}

  // find one cat entitu by its rowKey
  async find(rowKey: string, cat: Cat): Promise<Cat> {
    return this.catRepository.find(rowKey, cat);
  }

  // find all cat entities
  async findAll(): Promise<AzureTableStorageResultList<Cat>> {
    return this.catRepository.findAll();
  }

  // create a new cat entity
  async create(cat: Cat): Promise<Cat> {
    return this.catRepository.create(cat);
  }

  // update the a cat entity by its rowKey
  async update(rowKey: string, cat: Partial<Cat>): Promise<Cat> {
    return this.catRepository.update(rowKey, cat);
  }

  // delete a cat entity by its rowKey
  async delete(rowKey: string, cat: Cat): Promise<AzureTableStorageResponse> {
    return this.catRepository.delete(rowKey, cat);
  }
}
