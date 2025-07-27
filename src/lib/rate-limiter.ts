// A simple in-memory rate limiter.
// This is a basic implementation and might not be suitable for large-scale production.
// For more robust solutions, consider using a database like Redis.

const requests = new Map<string, number[]>();
const limit = 5; // Max 5 requests
const windowMs = 60 * 1000; // 1 minute

export async function rateLimiter(ip: string): Promise<{ success: boolean; message: string }> {
  const now = Date.now();
  const userRequests = requests.get(ip) || [];

  // Filter out requests that are outside the time window
  const recentRequests = userRequests.filter(timestamp => now - timestamp < windowMs);

  if (recentRequests.length >= limit) {
    return {
      success: false,
      message: 'Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau ít phút.',
    };
  }

  // Add the new request timestamp
  requests.set(ip, [...recentRequests, now]);

  return { success: true, message: 'Success' };
}
