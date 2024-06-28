import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
