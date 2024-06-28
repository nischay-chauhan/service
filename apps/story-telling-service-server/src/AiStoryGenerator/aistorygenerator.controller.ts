import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiStoryGeneratorService } from "./aistorygenerator.service";
import { GenerateStoryInput } from "../aiStoryGenerator/GenerateStoryInput";
import { GenerateStoryOutput } from "../aiStoryGenerator/GenerateStoryOutput";

@swagger.ApiTags("aiStoryGenerators")
@common.Controller("aiStoryGenerators")
export class AiStoryGeneratorController {
  constructor(protected readonly service: AiStoryGeneratorService) {}

  @common.Get("/:id/generate-story")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateStory(
    @common.Body()
    body: GenerateStoryInput
  ): Promise<string> {
        return this.service.GenerateStory(body);
      }

  @common.Post("/generate-user-story")
  @swagger.ApiOkResponse({
    type: GenerateStoryOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateUserStory(
    @common.Body()
    body: GenerateStoryInput
  ): Promise<GenerateStoryOutput> {
        return this.service.GenerateUserStory(body);
      }
}
