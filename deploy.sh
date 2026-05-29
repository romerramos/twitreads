#!/usr/bin/env bash
set -euo pipefail

VERSION=$(node -p "require('./package.json').version")
IMAGE="romerramos/twitreads"
HOST="root@209.38.37.201"

docker build -t "$IMAGE:$VERSION" -t "$IMAGE:latest" .

docker push "$IMAGE:$VERSION"
docker push "$IMAGE:latest"

ssh "$HOST" '
  docker pull romerramos/twitreads:latest &&
  (docker rm -f twitreads 2>/dev/null || true) &&
  docker run -d --restart unless-stopped --name twitreads -p 80:3000 romerramos/twitreads:latest
'
