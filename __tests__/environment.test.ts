import { describe, it, expect } from "vitest";

describe("Environment Variables", () => {
  it("should have STRIPE_SECRET_KEY environment variable set", () => {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    expect(stripeSecretKey).toBeDefined();
    expect(stripeSecretKey).not.toBe("");
    expect(typeof stripeSecretKey).toBe("string");

    // Optional: Check if it follows Stripe secret key format (starts with 'sk_')
    if (stripeSecretKey) {
      expect(stripeSecretKey).toMatch(/^sk_/);
    }
  });

  it("should have STRIPE_SECRET_KEY in the correct format", () => {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (stripeSecretKey) {
      // Stripe secret keys should start with 'sk_test_' or 'sk_live_'
      expect(stripeSecretKey).toMatch(/^sk_(test_|live_)/);
      // Should be at least 32 characters long (typical Stripe key length)
      expect(stripeSecretKey.length).toBeGreaterThan(32);
    }
  });
});
