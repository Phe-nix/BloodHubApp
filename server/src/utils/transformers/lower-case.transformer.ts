import { TransformFnParams } from "class-transformer";
import { MaybeType } from "../types/maybe";

export const lowerCaseTransformer = (
  params: TransformFnParams,
) : MaybeType<string> => params.value?.toLowerCase().trim();