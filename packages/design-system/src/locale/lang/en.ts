/* eslint-disable @typescript-eslint/naming-convention */
import type { N8nLocale } from 'n8n-design-system/types';

export default {
	'nds.auth.roles.owner': 'Owner',
	'nds.userInfo.you': '(you)',
	'nds.userSelect.selectUser': 'Select User',
	'nds.userSelect.noMatchingUsers': 'No matching users',
	'notice.showMore': 'Show more',
	'notice.showLess': 'Show less',
	'formInput.validator.fieldRequired': 'This field is required',
	'formInput.validator.minCharactersRequired': 'Must be at least {minimum} characters',
	'formInput.validator.maxCharactersRequired': 'Must be at most {maximum} characters',
	'formInput.validator.oneNumbersRequired': (config: { minimum: number }) => {
		return `Must have at least ${config.minimum} number${config.minimum > 1 ? 's' : ''}`;
	},
	'formInput.validator.validEmailRequired': 'Must be a valid email',
	'formInput.validator.uppercaseCharsRequired': (config: { minimum: number }) =>
		`Must have at least ${config.minimum} uppercase character${config.minimum > 1 ? 's' : ''}`,
	'formInput.validator.defaultPasswordRequirements':
		'8+ characters, at least 1 number and 1 capital letter',
	'sticky.markdownHint':
		'You can style with <a href="https://docs.n8n.io/workflows/sticky-notes/" target="_blank">Markdown</a>',
	'tags.showMore': (count: number) => `+${count} more`,
	'datatable.pageSize': 'Page size',
	'codeDiff.couldNotReplace': 'Could not replace code',
	'codeDiff.codeReplaced': 'Code replaced',
	'codeDiff.replaceMyCode': 'Replace my code',
	'codeDiff.replacing': 'Replacing...',
	'codeDiff.undo': 'Undo',
	'betaTag.beta': 'beta',
	'askAssistantButton.askAssistant': 'Ask Assistant',
	'assistantChat.errorParsingMarkdown': 'Error parsing markdown content',
	'assistantChat.aiAssistantLabel': 'AI Assistant',
	'assistantChat.aiAssistantName': 'Assistant',
	'assistantChat.sessionEndMessage.1':
		'This Assistant session has ended. To start a new session with the Assistant, click an',
	'assistantChat.sessionEndMessage.2': 'button in n8n',
	'assistantChat.you': 'You',
	'assistantChat.quickRepliesTitle': 'Quick reply 👇',
	'assistantChat.placeholder.1': () =>
		"I'm your Assistant, here to guide you through your journey with n8n.",
	'assistantChat.placeholder.2':
		"While I'm still learning, I'm already equipped to help you debug any errors you might encounter.",
	'assistantChat.placeholder.3': "If you run into an issue with a node, you'll see the",
	'assistantChat.placeholder.4': 'button',
	'assistantChat.placeholder.5':
		"Clicking it will start a chat with me, and I'll do my best to assist you!",
	'assistantChat.inputPlaceholder': 'Enter your response...',
	'inlineAskAssistantButton.asked': 'Asked',
} as N8nLocale;
