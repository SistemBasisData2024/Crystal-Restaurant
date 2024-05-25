export function flexCenterCol() {
  return ` flex flex-col items-center align-center justify-center `;
}

export function flexCenterRow() {
  return ` flex items-center align-center justify-center `;
}

export function fullScreen() {
  return ` min-h-screen w-screen `;
}

export function bgGradient(direction:string, color:string) {
  return ` bg-gradient-to-${direction} from-${color}-100 to-${color}-200 `
}
