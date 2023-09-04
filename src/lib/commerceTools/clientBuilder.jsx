import { ClientBuilder } from "@commercetools/sdk-client-v2";
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

const CTP_PROJECT_KEY = "bics-store-key";

export const projectKey = CTP_PROJECT_KEY;

const authMiddlewareOptions = {
  host: "https://auth.us-central1.gcp.commercetools.com",
  projectKey,
  credentials: {
    clientId: "af3frdj4hiKqufMagZpMq98E",
    clientSecret: "l7dy8x1PutzX82sX0XCYgDiyPHlUjNZ9",
  },
  scopes: [`manage_project:${projectKey}`],
};

const httpMiddlewareOptions = {
  host: "https://api.us-central1.gcp.commercetools.com",
};

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client);
};
