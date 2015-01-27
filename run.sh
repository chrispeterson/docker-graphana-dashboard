#!/bin/bash

set -e
echo "=> Starting and running Nginx..."
/usr/sbin/nginx -c /conf/default
