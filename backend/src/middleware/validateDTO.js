export const validateData = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: result.error.format(),
      });
    }

    // Replace req.body with the clean, Zod-parsed data
    req.body = result.data;
    next();
  };
};