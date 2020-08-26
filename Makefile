.PHONY: help run stop rebuild test

.DEFAULT: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36mmake %-20s\033[0m\n\t%s\n", $$1, $$2}'

run: stop  ## starts the application
	docker-compose up -d
	npm run start
	@echo "Backend running on http://localhost:3000/dev/graphql"

run-logs: stop  ## starts the application wiith logs
	docker-compose up -d && docker-compose logs -f -t
	npm run start
	@echo "Backend running on http://localhost:3000/dev/graphql"

stop:  ## stops the application
	docker-compose down
	@echo "Stopped the application."

rebuild: stop  ## rebuild and start the application
	docker-compose up -d --build
	npm run start
	@echo "Backend running on http://localhost:3000/dev/graphql"

test:  ## run tests
	sls invoke test
