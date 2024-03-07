function! ts_playground#copy_url_to_register(register) abort
  call denops#plugin#wait('ts-playground')
  let l:url = denops#request('ts-playground', 'getPlaygroundUrl', [])
  call setreg(a:register, l:url)
endfunction

function! ts_playground#open_it_in_playground() abort
  call denops#plugin#wait('ts-playground')
  call denops#notify('ts-playground', 'openInPlayground', [])
endfunction
