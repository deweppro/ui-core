SHELL=/bin/bash
RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(RUN_ARGS):;@:)

component:
	ng g component component/$(RUN_ARGS) --project=@deweppro/core

service:
	ng g service service/$(RUN_ARGS) --project=@deweppro/core

pipe:
	ng g pipe pipe/$(RUN_ARGS) --project=@deweppro/core

