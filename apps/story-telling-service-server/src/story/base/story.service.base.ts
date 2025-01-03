/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Story as PrismaStory,
  Chapter as PrismaChapter,
  User as PrismaUser,
} from "@prisma/client";

export class StoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StoryCountArgs, "select">): Promise<number> {
    return this.prisma.story.count(args);
  }

  async stories(args: Prisma.StoryFindManyArgs): Promise<PrismaStory[]> {
    return this.prisma.story.findMany(args);
  }
  async story(args: Prisma.StoryFindUniqueArgs): Promise<PrismaStory | null> {
    return this.prisma.story.findUnique(args);
  }
  async createStory(args: Prisma.StoryCreateArgs): Promise<PrismaStory> {
    return this.prisma.story.create(args);
  }
  async updateStory(args: Prisma.StoryUpdateArgs): Promise<PrismaStory> {
    return this.prisma.story.update(args);
  }
  async deleteStory(args: Prisma.StoryDeleteArgs): Promise<PrismaStory> {
    return this.prisma.story.delete(args);
  }

  async findChapters(
    parentId: string,
    args: Prisma.ChapterFindManyArgs
  ): Promise<PrismaChapter[]> {
    return this.prisma.story
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .chapters(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.story
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
