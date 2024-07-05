import { mergeResolvers } from "@graphql-tools/merge";
import userRevolver from "./user.resolver.js";
import transactionResolver from "./transaction.resolver.js";

const mergedResolvers=mergeResolvers([userRevolver,transactionResolver]);

export default mergedResolvers;