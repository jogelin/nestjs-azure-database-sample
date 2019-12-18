import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CatDto } from './cat.dto';
import { Cat } from './cat.entity';
import { CatService } from './cat.service';

@Controller('cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  async getAllCats() {
    return await this.catService.findAll();
  }

  @Get(':rowKey')
  async getCat(@Param('rowKey') rowKey) {
    try {
      return await this.catService.find(rowKey, new Cat());
    } catch (error) {
      // Entity not found
      throw new NotFoundException(error);
    }
  }

  @Post()
  async createCat(
    @Body()
    catData: CatDto,
  ) {
    try {
      const cat = new Cat();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(cat, catData);

      return await this.catService.create(cat);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Put(':rowKey')
  async saveCat(@Param('rowKey') rowKey, @Body() catData: CatDto) {
    try {
      const cat = new Cat();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(cat, catData);

      return await this.catService.update(rowKey, cat);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Patch(':rowKey')
  async updateCatDetails(
    @Param('rowKey') rowKey,
    @Body() catData: Partial<CatDto>,
  ) {
    try {
      const cat = new Cat();
      // Disclaimer: Assign only the properties you are expecting!
      Object.assign(cat, catData);

      return await this.catService.update(rowKey, cat);
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }

  @Delete(':rowKey')
  async deleteDelete(@Param('rowKey') rowKey) {
    try {
      const response = await this.catService.delete(rowKey, new Cat());

      if (response.statusCode === 204) {
        return null;
      } else {
        throw new UnprocessableEntityException(response);
      }
    } catch (error) {
      throw new UnprocessableEntityException(error);
    }
  }
}
