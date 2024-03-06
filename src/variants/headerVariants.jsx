export const headerVariants = {
    animatedHeader: {
      animation: 'slideIn 2s ease-in-out', // Adjust the duration and timing function as needed
    },
    slideIn: {
      from: {
        transform: 'translateX(-100%)', // Start off-screen to the left
      },
      to: {
        transform: 'translateX(0)', // Move to the original position
      },
    },
  };