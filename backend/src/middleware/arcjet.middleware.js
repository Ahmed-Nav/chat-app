import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (await decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "Rate limit exceeded" });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Bot detected" });
      } else {
        return res
          .status(400)
          .json({ message: "Access denied by security policy" });
      }
    }

    if (decision.results.some(isSpoofedBot)) {
      return res
        .status(403)
        .json({
          error: "Spoofed Bot detected",
          message: "malicious activity detected",
        });
    }

    next();
  } catch (error) {
    console.log("Arcjtet protection error", error);
  }
};
