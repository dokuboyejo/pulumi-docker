// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker
{
    public static class GetRegistryImage
    {
        /// <summary>
        /// Reads the image metadata from a Docker Registry. Used in conjunction with the
        /// [docker\_image](https://www.terraform.io/docs/providers/docker/r/image.html) resource to keep an image up
        /// to date on the latest available version of the tag.
        /// 
        /// {{% examples %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetRegistryImageResult> InvokeAsync(GetRegistryImageArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRegistryImageResult>("docker:index/getRegistryImage:getRegistryImage", args ?? new GetRegistryImageArgs(), options.WithVersion());
    }


    public sealed class GetRegistryImageArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Docker image, including any tags. e.g. `alpine:latest`
        /// </summary>
        [Input("name")]
        public string? Name { get; set; }

        public GetRegistryImageArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRegistryImageResult
    {
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        public readonly string? Name;
        public readonly string Sha256Digest;

        [OutputConstructor]
        private GetRegistryImageResult(
            string id,

            string? name,

            string sha256Digest)
        {
            Id = id;
            Name = name;
            Sha256Digest = sha256Digest;
        }
    }
}
