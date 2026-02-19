<?php
function generateApiKey()
{
  return bin2hex(random_bytes(32)); // 64 chars
}
