export function WithId(): MethodDecorator {
  return function (_, __, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const result = await originalMethod.apply(this, args);
      if (result && typeof result === 'object' && args.length > 0) {
        result.id = args[0];
      }
      return result;
    };
    return descriptor;
  };
}
