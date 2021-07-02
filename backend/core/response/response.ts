import { HttpResponseMessage, JsonContent } from "inversify-express-utils";

export default function responseFactory(
  message: string,
  data?: any,
  httpCode = 200
) {
  const response = new HttpResponseMessage(httpCode);
  response.content = new JsonContent({
    message: message,
    data: data,
  });
  return response;
}
