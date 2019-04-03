NODE_MODULE_BIN=./node_modules/.bin/

%:
	@:

fix:
	${NODE_MODULE_BIN}standard --fix

dev:
	./node_modules/.bin/webpack --mode development --target='node' ./src/index.js --output ./dist/leetcodees6.js

build:
	./node_modules/.bin/webpack --mode='production' --target='node' ./src/index.js --output ./dist/leetcodees6.js

node:
	${NODE_MODULE_BIN}babel-node --presets @babel/env $(filter-out $@,$(MAKECMDGOALS))

test:
	docker-compose -f ./docker-compose/test.yml up --abort-on-container-exit

release:
	${NODE_MODULE_BIN}release-it $(filter-out $@,$(MAKECMDGOALS))

.PHONY: test dist release