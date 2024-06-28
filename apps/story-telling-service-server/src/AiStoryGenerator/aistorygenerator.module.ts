import { Module } from "@nestjs/common";
import { AiStoryGeneratorService } from "./aistorygenerator.service";
import { AiStoryGeneratorController } from "./aistorygenerator.controller";
import { AiStoryGeneratorResolver } from "./aistorygenerator.resolver";

@Module({
  controllers: [AiStoryGeneratorController],
  providers: [AiStoryGeneratorService, AiStoryGeneratorResolver],
  exports: [AiStoryGeneratorService],
})
export class AiStoryGeneratorModule {}
