import { Injectable } from "@nestjs/common";
import { GenerateStoryInput } from "../aiStoryGenerator/GenerateStoryInput";
import { GenerateStoryOutput } from "../aiStoryGenerator/GenerateStoryOutput";

@Injectable()
export class AiStoryGeneratorService {
  constructor() {}
  async GenerateStory(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateUserStory(args: GenerateStoryInput): Promise<GenerateStoryOutput> {
    throw new Error("Not implemented");
  }
}
