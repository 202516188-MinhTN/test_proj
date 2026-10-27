import { GrowthBook } from "@growthbook/growthbook";

export const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-pg9WYbxbCXtsm0T9", // Client Key của bạn
  enableDevMode: true,
  disableCache: true,
});

// Kích hoạt lấy cờ từ server
growthbook.init({ streaming: true });