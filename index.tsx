/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Clem
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { addMessagePreSendListener, MessageSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import definePlugin from "@utils/types";

const URL_OR_COMMAND_PATTERN = /^\s*(?:https?:\/\/|\/)/i;
const FIRST_LOWERCASE_LETTER_PATTERN = /^(\s*)(\p{Ll})/u;

const listener: MessageSendListener = (_, message) => {
    const { content } = message;

    if (!content || URL_OR_COMMAND_PATTERN.test(content)) return;

    message.content = content.replace(
        FIRST_LOWERCASE_LETTER_PATTERN,
        (_, leadingWhitespace: string, firstLetter: string) => leadingWhitespace + firstLetter.toLocaleUpperCase(),
    );
};

export default definePlugin({
    name: "AutoCapitalize",
    description: "Automatically capitalizes the first letter of messages.",
    tags: ["Chat", "Customisation", "Utility"],
    searchTerms: ["uppercase", "capitalization", "writing"],
    authors: [{ name: "Clem", id: 0n }],

    start() {
        addMessagePreSendListener(listener);
    },

    stop() {
        removeMessagePreSendListener(listener);
    },
});
