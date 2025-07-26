// --- background.js ---
// Service worker for handling notifications and initial setup.

// 1. Set Default Settings on Installation
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        chrome.storage.sync.set({
            settings: {
                pomodoro: 25,
                shortBreak: 5,
                longBreak: 15,
                autoPauseVideo: true,
                playSound: true,
                longBreakInterval: 4,
                theme: 'dark'
            },
            stats: {
                history: []
            }
        });
    }
});

// 2. Listen for Messages from Content Script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'showNotification') {
        const { mode } = request;
        let title, message;

        switch (mode) {
            case 'pomodoro':
                title = 'Time for a break!';
                message = 'Great work! Your Pomodoro session has finished.';
                break;
            case 'shortBreak':
                title = 'Break is over!';
                message = 'Time to get back to focus.';
                break;
            case 'longBreak':
                title = 'Long break is over!';
                message = 'Ready for the next round?';
                break;
        }

        chrome.notifications.create({
            type: 'basic',
            iconUrl: '../icons/icon128.png',
            title: title,
            message: message,
            priority: 2
        });
        
        // Log the completed session
        logSession(mode);
    }
    return true; // Indicates async response
});

// 3. Log Completed Session to Storage
async function logSession(type) {
    if (type !== 'pomodoro') return; // Only log completed pomodoros

    const data = await chrome.storage.sync.get('stats');
    const stats = data.stats || { history: [] };
    
    stats.history.push({
        date: new Date().toISOString(),
        type: 'pomodoro'
    });

    // Keep history to a reasonable size, e.g., last 500 entries
    if (stats.history.length > 500) {
        stats.history.shift();
    }

    await chrome.storage.sync.set({ stats });
}
