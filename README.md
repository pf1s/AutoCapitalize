# AutoCapitalize

![Vencord](https://img.shields.io/badge/Vencord-user%20plugin-5865F2?logo=discord&logoColor=white)
![License](https://img.shields.io/badge/license-GPL--3.0--or--later-blue)

Automatically capitalizes the first lowercase letter of messages before they are sent in Discord.

## Features

- Preserves leading whitespace.
- Supports Unicode letters.
- Leaves already-capitalized messages unchanged.
- Does not modify links or slash commands.
- Unregisters its message listener cleanly when disabled.

## Installation

AutoCapitalize is a Vencord user plugin. It must be installed from inside a local Vencord checkout.

1. Clone or open a [Vencord](https://github.com/Vendicated/Vencord) checkout.
2. Create the plugin directory:

   ```sh
   mkdir -p src/userplugins/AutoCapitalize
   ```

3. Download [`index.tsx`](./index.tsx) into that directory.
4. From the Vencord root, install dependencies and build:

   ```sh
   pnpm i
   pnpm build
   ```

5. Enable **AutoCapitalize** in **Vencord Settings > Plugins**.

For desktop injection, follow Vencord's official [installation guide](https://docs.vencord.dev/installing/).

## Behavior

| Input | Result |
| --- | --- |
| `hello world` | `Hello world` |
| `  hello world` | `  Hello world` |
| `Hello world` | Unchanged |
| `https://example.com` | Unchanged |
| `/help` | Unchanged |

Only the first lowercase letter after optional leading whitespace is changed. Messages beginning with an emoji, mention, code block, or another non-letter character are left untouched.

## Compatibility

AutoCapitalize is designed for Vencord and uses Vencord's message pre-send API. It is not a standalone Discord plugin.

## License

AutoCapitalize is distributed under the [GNU General Public License v3.0 or later](https://www.gnu.org/licenses/gpl-3.0.html), consistent with Vencord's licensing.
