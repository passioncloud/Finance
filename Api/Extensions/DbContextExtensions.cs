using System.Reflection;
using Microsoft.EntityFrameworkCore;

namespace Api.Extensions;

public static class DbContextExtensions 
{

    public static DbSet<T> GetDbSet<T>(this DbContext dbContext) where T : class 
    {
        MethodInfo[] methods = typeof(DbContext).GetMethods(BindingFlags.Public|BindingFlags.Instance);
        MethodInfo method = methods.First(m => m.Name == nameof(DbContext.Set) && !m.GetParameters().Any());

        method = method.MakeGenericMethod(typeof(T));
        return method.Invoke(dbContext, null) as DbSet<T>;
    }
}
