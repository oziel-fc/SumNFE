import time

from fastapi import Request
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware


MAX_REQUEST_SIZE_MB = 5
RATE_LIMIT_SECONDS = 6

MAX_REQUEST_SIZE_BYTES = MAX_REQUEST_SIZE_MB * 1024 * 1024


request_logs = {}


class SecurityMiddleware(BaseHTTPMiddleware):

    async def dispatch(self, request: Request, call_next):

        client_ip = request.client.host
        current_time = time.time()

        last_request_time = request_logs.get(client_ip)

        if last_request_time:

            elapsed_time = current_time - last_request_time

            if elapsed_time < RATE_LIMIT_SECONDS:

                return JSONResponse(
                    status_code=429,
                    content={
                        "detail": f"Wait {RATE_LIMIT_SECONDS} seconds between requests"
                    }
                )

        request_logs[client_ip] = current_time

        content_length = request.headers.get("content-length")

        if content_length:

            content_length = int(content_length)

            if content_length > MAX_REQUEST_SIZE_BYTES:

                return JSONResponse(
                    status_code=413,
                    content={
                        "detail": f"Request size exceeds {MAX_REQUEST_SIZE_MB}MB"
                    }
                )

        response = await call_next(request)

        return response