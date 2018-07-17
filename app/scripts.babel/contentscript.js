import $ from 'jquery';
import path from 'path';
import sanitize from 'sanitize-filename';

const username = sanitize($('.node-info .username').text()).trim();
const title = sanitize($('.node-info .title').text()).trim();
const filename = path.join('iwara', username, `${title}.mp4`);

$('#download-button').on('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  const url = 'https:' + $('#download-options li:first a').attr('href');
  chrome.runtime.sendMessage({url, filename});
});
