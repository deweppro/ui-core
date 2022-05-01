SHELL=/bin/bash
RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(RUN_ARGS):;@:)

component:
	ng g component component/$(RUN_ARGS) --project=@deweppro/core

service:
	ng g service service/$(RUN_ARGS) --project=@deweppro/core

pipe:
	ng g pipe pipe/$(RUN_ARGS) --project=@deweppro/core

publish:
	npm run version-patch
	npm run publish

build_demo:
	npm run build
	rm -rf ./docs
	mkdir ./docs
	cp -r ./dist/ui-core/. ./docs/

build_lib:
	npm run build-lib

run:
	npm run start
