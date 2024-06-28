import { ChapterListRelationFilter } from "../chapter/ChapterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StoryWhereInput = {
  chapters?: ChapterListRelationFilter;
  id?: StringFilter;
  thumbnail?: JsonFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
