import $ from 'jquery';
import path from 'path';
import sanitize from 'sanitize-filename';

const username = sanitize($('.node-info .username').text()).trim();
const title = sanitize($('.node-info .title').text()).trim();
const date = document.querySelector('.node-info .submitted').textContent.match(/作成日:(.+)/)[1].trim().replace(/ |-|:/g, '');
const filename = path.join('iwara', username, `${date}-${title}.mp4`);

$('#download-button').on('click', (e) => {
  e.stopPropagation();
  e.preventDefault();
  const url = 'https:' + $('#download-options li:first a').attr('href');
  chrome.runtime.sendMessage({url, filename});
});
