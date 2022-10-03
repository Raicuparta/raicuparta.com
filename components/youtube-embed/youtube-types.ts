export type YoutubePlayerParameters = {
  autoplay?: '0' | '1' | undefined;
  cc_lang_pref?: string | undefined;
  cc_load_policy?: '1' | undefined;
  color?: 'red' | 'white' | undefined;
  controls?: '0' | '1' | undefined;
  disablekb?: '0' | '1' | undefined;
  enablejsapi?: '0' | '1' | undefined;
  end?: string | undefined;
  fs?: '0' | '1' | undefined;
  hl?: string | undefined;
  iv_load_policy?: '1' | '3' | undefined;
  list?: string | undefined;
  listType?: 'playlist' | 'search' | 'user_uploads' | undefined;
  loop?: '0' | '1' | undefined;
  modestbranding?: '1' | undefined;
  origin?: string | undefined;
  playlist?: string | undefined;
  playsinline?: '0' | '1' | undefined;
  rel?: '0' | '1' | undefined;
  start?: string | undefined;
  widget_referrer?: string | undefined;
};

export type YoutubePosterQuality =
  | 'maxresdefault'
  | '0'
  | '1'
  | '2'
  | '3'
  | 'default'
  | 'hqdefault'
  | 'mqdefault'
  | 'sddefault';
