# YouTube Pomodoro Plus

A Chrome extension that injects a fully-featured Pomodoro timer into the YouTube player. Stay focused and manage your time effectively without leaving your favorite video platform.

## Features

- **Pomodoro Timer Overlay:** A sleek, semi-transparent timer directly on the YouTube video player.
- **Customizable Cycles:** Set custom durations for Pomodoro, Short Break, and Long Break sessions.
- **Video Integration:** Automatically pauses the video when a Pomodoro session ends and resumes it when a break is over.
- **Notifications:** Get desktop notifications for session completions.
- **Statistics:** Track your productivity with a history of completed Pomodoros and a weekly activity chart.
- **Hotkeys:** Control the timer with keyboard shortcuts (`P` to start/pause, `R` to reset, `M` to switch modes).
- **Light/Dark Themes:** Choose a theme that matches your preference.
- **Localization:** Available in English and Spanish.

## File Structure

```
.
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── src/
│   ├── background.js     # Handles notifications and storage
│   ├── content.js        # Injects UI and manages timer on YouTube
│   ├── options.css       # Styles for the options page
│   ├── options.html      # Popup for extension settings
│   ├── options.js        # Logic for the options page
│   ├── style.css         # Styles for the timer overlay
│   └── timer.js          # Core Pomodoro timer logic
├── _locales/
│   ├── en/messages.json  # English localization
│   └── es/messages.json  # Spanish localization
├── manifest.json         # Extension manifest (V3)
└── README.md             # This file
```

## How to Install in Developer Mode

1.  **Download or Clone:** Clone this repository or download it as a ZIP file and unzip it.
2.  **Open Chrome Extensions:** Open Google Chrome and navigate to `chrome://extensions`.
3.  **Enable Developer Mode:** In the top right corner, toggle the "Developer mode" switch on.
4.  **Load Unpacked:** Click the "Load unpacked" button that appears on the top left.
5.  **Select Folder:** In the file dialog, select the root folder of this project (the one containing `manifest.json`).
6.  **Done!** The "YouTube Pomodoro Plus" extension should now appear in your list of extensions and be active.

## How to Use

1.  Navigate to any video on `www.youtube.com`.
2.  You will see a new Pomodoro icon floating in the bottom right corner. Click it to open the timer overlay.
3.  Use the controls to start, pause, reset, or switch between Pomodoro, Short Break, and Long Break modes.
4.  To change settings, click the extension icon in the Chrome toolbar to open the options popup.

## How to Publish to the Chrome Web Store (Brief Guide)

1.  **Prepare Assets:** Ensure you have high-quality icons and promotional screenshots.
2.  **Create a ZIP file:** Compress the entire project folder into a single ZIP file.
3.  **Google Developer Account:** You'll need a Google Developer account (a one-time $5 registration fee is required).
4.  **Developer Dashboard:** Go to the Chrome Developer Dashboard.
5.  **Upload:** Click "Add new item", upload your ZIP file, and fill out all the required store listing information (description, screenshots, etc.).
6.  **Privacy Policy:** Provide a link to a privacy policy if you are handling user data.
7.  **Submit for Review:** Submit the extension for review. The review process can take a few days to a few weeks.
