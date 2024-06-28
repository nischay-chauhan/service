import * as graphql from "@nestjs/graphql";
import { GenerateStoryInput } from "../aiStoryGenerator/GenerateStoryInput";
import { GenerateStoryOutput } from "../aiStoryGenerator/GenerateStoryOutput";
import { AiStoryGeneratorService } from "./aistorygenerator.service";

export class AiStoryGeneratorResolver {
  constructor(protected readonly service: AiStoryGeneratorService) {}

  @graphql.Query(() => String)
  async GenerateStory(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateStory(args);
  }

  @graphql.Mutation(() => GenerateStoryOutput)
  async GenerateUserStory(
    @graphql.Args()
    args: GenerateStoryInput
  ): Promise<GenerateStoryOutput> {
    return this.service.GenerateUserStory(args);
  }
}
