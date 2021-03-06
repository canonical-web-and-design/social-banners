import { setContent } from "./content";
import { addUbuntuLogo, addMicrosoftLogo } from "./images";
import { createSuru } from "./suru";
import { setupDownloadLinks } from "./handle-downloads";

function generateBannerCanvas(options) {
  // FACEBOOK
  const canvasfacebook = document.getElementById("facebook");
  const ctxfacebook = canvasfacebook.getContext("2d");

  createSuru(ctxfacebook, options.background, { width: 1200, height: 628 });

  if (options.logo !== "none") {
    addUbuntuLogo(ctxfacebook, {
      x: 70,
      y: 52,
      width: 264,
      height: 59,
    });
    if (options.logo === "ubuntu+microsoft") {
      addMicrosoftLogo("horizontal", ctxfacebook, {
        x: 795,
        y: 60,
        width: 330,
        height: 53,
      });
    }
  }

  setContent(ctxfacebook, {
    width: 560,
    x: 70,
    y: 210,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 64,
      lineHeight: 74,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 20,
      lineHeight: 32,
    },
    imageOrientation: "right",
    logo: options.logo,
  });

  setupDownloadLinks(options, canvasfacebook, "facebook-download-button");

  // FACEBOOK MOBILE
  const canvasfacebookmobile = document.getElementById("facebookmobile");
  const ctxfacebookmobile = canvasfacebookmobile.getContext("2d");

  createSuru(ctxfacebookmobile, options.background, {
    width: 1080,
    height: 1080,
  });

  if (options.logo !== "none") {
    addUbuntuLogo(ctxfacebookmobile, {
      x: 70,
      y: 52,
      width: 290,
      height: 65,
    });
    if (options.logo === "ubuntu+microsoft") {
      addMicrosoftLogo("horizontal", ctxfacebookmobile, {
        x: 650,
        y: 60,
        width: 360,
        height: 58,
      });
    }
  }

  setContent(ctxfacebookmobile, {
    width: 800,
    x: 70,
    y: 230,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 76,
      lineHeight: 90,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 24,
      lineHeight: 38,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(
    options,
    canvasfacebookmobile,
    "facebook-mobile-download-button"
  );

  // FACEBOOK916
  const canvasfacebook916 = document.getElementById("facebook916");
  const ctxfacebook916 = canvasfacebook916.getContext("2d");

  createSuru(ctxfacebook916, options.background, {
    width: 400,
    height: 500,
  });

  if (options.logo !== "none") {
    addUbuntuLogo(ctxfacebook916, {
      x: 43,
      y: 24,
      width: 143,
      height: 32,
    });
    if (options.logo === "ubuntu+microsoft") {
      addMicrosoftLogo("vertical", ctxfacebook916, {
        x: 250,
        y: 24,
        width: 108,
        height: 32,
      });
    }
  }

  setContent(ctxfacebook916, {
    width: 330,
    x: 43,
    y: 110,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 36,
      lineHeight: 42,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(
    options,
    canvasfacebook916,
    "facebook-9-16-download-button"
  );

  // TWITTER
  const canvastwitter = document.getElementById("twitter");
  const ctxtwitter = canvastwitter.getContext("2d");

  createSuru(ctxtwitter, options.background, {
    width: 800,
    height: 418,
  });

  if (options.logo !== "none") {
    addUbuntuLogo(ctxtwitter, {
      x: 420,
      y: 40,
      width: 171,
      height: 38,
    });
    if (options.logo === "ubuntu+microsoft") {
      addMicrosoftLogo("vertical", ctxtwitter, {
        x: 630,
        y: 40,
        width: 132,
        height: 38,
      });
    }
  }

  setContent(ctxtwitter, {
    width: 360,
    x: 420,
    y: 165,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 42,
      lineHeight: 48,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "left",
  });

  setupDownloadLinks(options, canvastwitter, "twitter-wide-download-button");

  // TWITTERSQUARE
  const canvastwittersquare = document.getElementById("twittersquare");
  const ctxtwittersquare = canvastwittersquare.getContext("2d");

  createSuru(ctxtwittersquare, options.background, {
    width: 800,
    height: 800,
  });

  if (options.logo !== "none") {
    addUbuntuLogo(ctxtwittersquare, {
      x: 70,
      y: 50,
      width: 222,
      height: 49,
    });
    if (options.logo === "ubuntu+microsoft") {
      addMicrosoftLogo("vertical", ctxtwittersquare, {
        x: 540,
        y: 52,
        width: 170,
        height: 49,
      });
    }
  }

  setContent(ctxtwittersquare, {
    width: 630,
    x: 70,
    y: 190,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 58,
      lineHeight: 68,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 19,
      lineHeight: 32,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(
    options,
    canvastwittersquare,
    "twitter-square-download-button"
  );

  // display-728-90
  const canvasdisplay728x90 = document.getElementById("display-728-90-canvas");
  const ctxdisplay728x90 = canvasdisplay728x90.getContext("2d");

  createSuru(ctxdisplay728x90, options.background, {
    width: 728,
    height: 90,
  });

  if (options.logo === "ubuntu") {
    addUbuntuLogo(ctxdisplay728x90, {
      x: 535,
      y: 20,
      width: 177,
      height: 39,
    });
  }

  if (options.logo === "ubuntu+microsoft") {
    addUbuntuLogo(ctxdisplay728x90, {
      x: 450,
      y: 30,
      width: 122,
      height: 27,
    });

    addMicrosoftLogo("vertical", ctxdisplay728x90, {
      x: 595,
      y: 29,
      width: 113,
      height: 32,
    });
  }

  setContent(ctxdisplay728x90, {
    width: 400,
    x: 30,
    y: 34,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 24,
      lineHeight: 24,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 16,
    },
  });

  setupDownloadLinks(
    options,
    canvasdisplay728x90,
    "display-728-90-download-button"
  );

  // display-160-600
  const canvasdisplay160x600 = document.getElementById(
    "display-160-600-canvas"
  );
  const ctxdisplay160x600 = canvasdisplay160x600.getContext("2d");

  createSuru(ctxdisplay160x600, options.background, {
    width: 160,
    height: 600,
  });

  if (options.logo === "ubuntu") {
    addUbuntuLogo(ctxdisplay160x600, {
      x: 8,
      y: 30,
      width: 142,
      height: 31,
    });
  }

  if (options.logo === "ubuntu+microsoft") {
    addUbuntuLogo(ctxdisplay160x600, {
      x: 10,
      y: 16,
      width: 114,
      height: 25,
    });

    addMicrosoftLogo("vertical", ctxdisplay160x600, {
      x: 10,
      y: 55,
      width: 114,
      height: 32,
    });
  }

  let yContent160x600 = 120;
  if (options.logo === "ubuntu+microsoft") {
    yContent160x600 = 150;
  }
  setContent(ctxdisplay160x600, {
    width: 130,
    x: 8,
    y: yContent160x600,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 28,
      lineHeight: 28,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "skyscraper",
  });

  setupDownloadLinks(
    options,
    canvasdisplay160x600,
    "display-160-600-download-button"
  );

  // display-300-600
  const canvasdisplay300x600 = document.getElementById(
    "display-300-600-canvas"
  );
  const ctxdisplay300x600 = canvasdisplay300x600.getContext("2d");

  createSuru(ctxdisplay300x600, options.background, {
    width: 300,
    height: 600,
  });

  if (options.logo === "ubuntu") {
    addUbuntuLogo(ctxdisplay300x600, {
      x: 25,
      y: 30,
      width: 177,
      height: 39,
    });
  }

  if (options.logo === "ubuntu+microsoft") {
    addUbuntuLogo(ctxdisplay300x600, {
      x: 25,
      y: 20,
      width: 122,
      height: 27,
    });

    addMicrosoftLogo("vertical", ctxdisplay300x600, {
      x: 175,
      y: 20,
      width: 95,
      height: 27,
    });
  }
  setContent(ctxdisplay300x600, {
    width: 250,
    x: 25,
    y: 130,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 42,
      lineHeight: 48,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
    imageOrientation: "bottom",
  });

  setupDownloadLinks(
    options,
    canvasdisplay300x600,
    "display-300-600-download-button"
  );

  // display-300-250
  const canvasdisplay300x250 = document.getElementById(
    "display-300-250-canvas"
  );
  const ctxdisplay300x250 = canvasdisplay300x250.getContext("2d");

  createSuru(ctxdisplay300x250, options.background, {
    width: 300,
    height: 250,
  });

  if (options.logo === "ubuntu") {
    addUbuntuLogo(ctxdisplay300x250, {
      x: 30,
      y: 20,
      width: 143,
      height: 32,
    });
  }

  if (options.logo === "ubuntu+microsoft") {
    addUbuntuLogo(ctxdisplay300x250, {
      x: 30,
      y: 20,
      width: 122,
      height: 27,
    });

    addMicrosoftLogo("vertical", ctxdisplay300x250, {
      x: 170,
      y: 20,
      width: 95,
      height: 27,
    });
  }

  setContent(ctxdisplay300x250, {
    width: 250,
    x: 30,
    y: 105,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 32,
      lineHeight: 32,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 24,
    },
  });

  setupDownloadLinks(
    options,
    canvasdisplay300x250,
    "display-300-250-download-button"
  );

  // display-600-100
  const canvasdisplay600x100 = document.getElementById(
    "display-600-100-canvas"
  );
  const ctxdisplay600x100 = canvasdisplay600x100.getContext("2d");

  createSuru(ctxdisplay600x100, options.background, {
    width: 600,
    height: 100,
  });

  if (options.logo === "ubuntu") {
    addUbuntuLogo(ctxdisplay600x100, {
      x: 420,
      y: 25,
      width: 159,
      height: 35,
    });
  }

  if (options.logo === "ubuntu+microsoft") {
    addUbuntuLogo(ctxdisplay600x100, {
      x: 361,
      y: 36,
      width: 110,
      height: 24,
    });

    addMicrosoftLogo("vertical", ctxdisplay600x100, {
      x: 485,
      y: 35,
      width: 101,
      height: 28,
    });
  }

  setContent(ctxdisplay600x100, {
    width: 320,
    x: 30,
    y: 30,
    title: {
      text: options.title,
      fontWeight: 100,
      fontSize: 24,
      lineHeight: 24,
    },
    subtitle: {
      text: options.subtitle,
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 16,
    },
  });

  setupDownloadLinks(
    options,
    canvasdisplay600x100,
    "display-600-100-download-button"
  );
}

export { generateBannerCanvas };
