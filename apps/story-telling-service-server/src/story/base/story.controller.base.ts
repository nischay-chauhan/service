/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StoryService } from "../story.service";
import { StoryCreateInput } from "./StoryCreateInput";
import { Story } from "./Story";
import { StoryFindManyArgs } from "./StoryFindManyArgs";
import { StoryWhereUniqueInput } from "./StoryWhereUniqueInput";
import { StoryUpdateInput } from "./StoryUpdateInput";
import { ChapterFindManyArgs } from "../../chapter/base/ChapterFindManyArgs";
import { Chapter } from "../../chapter/base/Chapter";
import { ChapterWhereUniqueInput } from "../../chapter/base/ChapterWhereUniqueInput";

export class StoryControllerBase {
  constructor(protected readonly service: StoryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Story })
  async createStory(@common.Body() data: StoryCreateInput): Promise<Story> {
    return await this.service.createStory({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        thumbnail: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Story] })
  @ApiNestedQuery(StoryFindManyArgs)
  async stories(@common.Req() request: Request): Promise<Story[]> {
    const args = plainToClass(StoryFindManyArgs, request.query);
    return this.service.stories({
      ...args,
      select: {
        createdAt: true,
        id: true,
        thumbnail: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Story })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async story(
    @common.Param() params: StoryWhereUniqueInput
  ): Promise<Story | null> {
    const result = await this.service.story({
      where: params,
      select: {
        createdAt: true,
        id: true,
        thumbnail: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Story })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStory(
    @common.Param() params: StoryWhereUniqueInput,
    @common.Body() data: StoryUpdateInput
  ): Promise<Story | null> {
    try {
      return await this.service.updateStory({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          thumbnail: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Story })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStory(
    @common.Param() params: StoryWhereUniqueInput
  ): Promise<Story | null> {
    try {
      return await this.service.deleteStory({
        where: params,
        select: {
          createdAt: true,
          id: true,
          thumbnail: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/chapters")
  @ApiNestedQuery(ChapterFindManyArgs)
  async findChapters(
    @common.Req() request: Request,
    @common.Param() params: StoryWhereUniqueInput
  ): Promise<Chapter[]> {
    const query = plainToClass(ChapterFindManyArgs, request.query);
    const results = await this.service.findChapters(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,
        pictures: true,

        story: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/chapters")
  async connectChapters(
    @common.Param() params: StoryWhereUniqueInput,
    @common.Body() body: ChapterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chapters: {
        connect: body,
      },
    };
    await this.service.updateStory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/chapters")
  async updateChapters(
    @common.Param() params: StoryWhereUniqueInput,
    @common.Body() body: ChapterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chapters: {
        set: body,
      },
    };
    await this.service.updateStory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/chapters")
  async disconnectChapters(
    @common.Param() params: StoryWhereUniqueInput,
    @common.Body() body: ChapterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      chapters: {
        disconnect: body,
      },
    };
    await this.service.updateStory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
