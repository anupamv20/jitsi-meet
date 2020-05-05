// @flow

/**
 * Flag indicating if add-people functionality should be enabled.
 * Default: enabled (true).
 */
export const ADD_PEOPLE_ENABLED = 'add-people.enabled';

/**
 * Flag indicating if calendar integration should be enabled.
 * Default: enabled (true) on Android, auto-detected on iOS.
 */
export const CALENDAR_ENABLED = 'calendar.enabled';

/**
 * Flag indicating if call integration (CallKit on iOS, ConnectionService on Android)
 * should be enabled.
 * Default: enabled (true).
 */
export const CALL_INTEGRATION_ENABLED = 'call-integration.enabled';

/**
 * Flag indicating if chat should be enabled.
 * Default: enabled (true).
 */
export const CLOSE_CAPTIONS_ENABLED = 'close-captions.enabled';

/**
 * Flag indicating if chat should be enabled.
 * Default: enabled (true).
 */
export const CHAT_ENABLED = 'chat.enabled';

/**
 * Flag indicating if invite functionality should be enabled.
 * Default: enabled (true).
 */
export const INVITE_ENABLED = 'invite.enabled';

/**
 * Flag indicating if recording should be enabled in iOS.
 * Default: disabled (false).
 */
export const IOS_RECORDING_ENABLED = 'ios.recording.enabled';

/**
 * Flag indicating if live-streaming should be enabled.
 * Default: auto-detected.
 */
export const LIVE_STREAMING_ENABLED = 'live-streaming.enabled';

/**
 * Flag indicating if displaying the meeting name should be enabled.
 * Default: enabled (true).
 */
export const MEETING_NAME_ENABLED = 'meeting-name.enabled';

/**
 * Flag indicating if the meeting password button should be enabled.
 * Note that this flag just decides on the buttton, if a meeting has a password
 * set, the password ddialog will still show up.
 * Default: enabled (true).
 */
export const MEETING_PASSWORD_ENABLED = 'meeting-password.enabled';

/**
 * Flag indicating if Picture-in-Picture should be enabled.
 * Default: auto-detected.
 */
export const PIP_ENABLED = 'pip.enabled';

/**
 * Flag indicating if raise hand feature should be enabled.
 * Default: enabled.
 */
export const RAISE_HAND_ENABLED = 'raise-hand.enabled';

/**
 * Flag indicating if recording should be enabled.
 * Default: auto-detected.
 */
export const RECORDING_ENABLED = 'recording.enabled';

/**
 * Flag indicating if the welcome page should be enabled.
 * Default: disabled (false).
 */
export const WELCOME_PAGE_ENABLED = 'welcomepage.enabled';
