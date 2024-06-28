import { SortOrder } from "../../util/SortOrder";

export type ChapterOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pictures?: SortOrder;
  storyId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
