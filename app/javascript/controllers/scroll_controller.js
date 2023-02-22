import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    initialize() {
        this.resetScrollWithoutThreshold(messages);
    }

    connect() {
        console.log('scroll controller connected');
        const messages = document.getElementById('messages');
        messages.addEventListener('DOMNodeInserted', this.resetScroll);
    }

    disconnect() {
        console.log('scroll controller disconnected');
    }

    resetScroll() {
        const bottomOfScroll = messages.scrollHeight - messages.clientHeight;
        const upperScrollThreshold = bottomOfScroll - 500;
        if (messages.scrollTop > upperScrollThreshold) {
            this.resetScrollWithoutThreshold(messages);
        }
    }

    resetScrollWithoutThreshold(messages) {
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }
}