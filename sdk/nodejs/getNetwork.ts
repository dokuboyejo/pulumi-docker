// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

/**
 * Finds a specific docker network and returns information about it.
 * 
 * ## Example Usage
 * 
 * 
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 * 
 * const main = pulumi.output(docker.getNetwork({
 *     name: "main",
 * }, { async: true }));
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-docker/blob/master/website/docs/d/docker_network.html.markdown.
 */
export function getNetwork(args?: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("docker:index/getNetwork:getNetwork", {
        "id": args.id,
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    /**
     * The id of the Docker network.
     */
    readonly id?: string;
    /**
     * The name of the Docker network.
     */
    readonly name?: string;
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    /**
     * (Optional, string) The driver of the Docker network. 
     * Possible values are `bridge`, `host`, `overlay`, `macvlan`.
     * See [docker docs][networkdocs] for more details.
     */
    readonly driver: string;
    readonly id?: string;
    readonly internal: boolean;
    readonly ipamConfigs: outputs.GetNetworkIpamConfig[];
    readonly name?: string;
    /**
     * (Optional, map) Only available with bridge networks. See
     * [docker docs][bridgeoptionsdocs] for more details.
     * * `internal` (Optional, bool) Boolean flag for whether the network is internal.
     * * `ipamConfig` (Optional, map) See IPAM below for details.
     * * `scope` (Optional, string) Scope of the network. One of `swarm`, `global`, or `local`.
     */
    readonly options: {[key: string]: any};
    readonly scope: string;
}
