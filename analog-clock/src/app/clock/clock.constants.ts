
export const CLOCK_CONSTANTS = {
  // NUMBERS
  CENTER_OFFSET: 50,      // Center relative to the numbers
  RADIUS: 45,             // Distance of numbers form the center
  DEGREES_PER_HOUR: 30,    // Degrees moved by the hour hand per hour
  DEGREES_TO_RADIAN: Math.PI / 180,   // Convert degrees to radian

  // HANDS
  DEGREES_PER_MIN_OR_SEC: 6,    // Degrees to move per minute or second
  MINUTE_ADJUSTMENT: 0.5,       // Hour hand adjustment per minute
  SECOND_ADJUSTMENT: 0.1,       // Minute hand adjustment per second
  OFFSET_ROTATION: 180          // Rotationoffsetfor alignment
};
